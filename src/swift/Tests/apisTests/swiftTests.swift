import XCTest
@testable import SagiAPI

import GRPC
import NIOSSL
import NIO

final class swiftTests: XCTestCase {
    func testExample() {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct
        // results.
        let connection = HealthCheckConnection(host: "apis.stage.sagittarius.ai", port: 8443)
        XCTAssertEqual(connection.healthCheck(), true)
    }

    static var allTests = [
        ("testExample", testExample),
    ]
}


class HealthCheckConnection {
    let group: EventLoopGroup
    let connection: ClientConnection
    
    
    init(host: String, port: Int) {
        self.group = MultiThreadedEventLoopGroup(numberOfThreads: 1)
        
        var certfile: String
        var keyfile: String
        var cafile: String
        
        #if os(iOS)
            certfile = Bundle.main.path(forResource: "cert", ofType: ".pem")!
            keyfile = Bundle.main.path(forResource: "key", ofType: ".pem")!
            cafile = Bundle.main.path(forResource: "ca", ofType: ".pem")!
        #else
            let dir = URL(fileURLWithPath: FileManager.default.currentDirectoryPath, isDirectory: true)
                .appendingPathComponent("../nodejs/test", isDirectory: true)
            certfile = dir.appendingPathComponent("cert.pem").path
            keyfile = dir.appendingPathComponent("key.pem").path
            cafile = dir.appendingPathComponent("ca.pem").path
        #endif
        
        let cert = try! NIOSSLCertificate.fromPEMFile(certfile)
        let key = NIOSSLPrivateKeySource.file(keyfile)
        let ca = NIOSSLTrustRoots.file(cafile)
        
        let configuration = ClientConnection.Configuration(
          target: .hostAndPort(host, port),
          eventLoopGroup: self.group,
          tls: ClientConnection.Configuration.TLS(certificateChain: [NIOSSLCertificateSource.certificate(cert.first!)],
                     privateKey: key,
                     trustRoots: ca,
                     certificateVerification: .fullVerification)
        )
        
        self.connection = ClientConnection(configuration: configuration)
    }
    
    
    func healthCheck() -> Bool {
        let checker = Sagittarius_Health_V1_HealthServiceClient(connection: self.connection)
        let request = Sagittarius_Health_V1_HealthCheckRequest()
        let docheck = checker.check(request)
        do {
            let response = try docheck.response.wait()
            print("health check status: \(response.status)")
        } catch {
            print("checker failed: \(error)")
            return false
        }
        return true
    }
    
    deinit {
        try? group.syncShutdownGracefully()
    }
}

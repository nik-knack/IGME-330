import { createServer } from "node:http";

const PORT = 3000;

const server = createServer((req, res) => {
    const ip = req.socket.remoteAddress;
    console.log(`${req.method} ${req.url} - from ${ip}`);

    ips.add(ip);

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end([...ips].join("\n"));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log(`Also reachable on your local network on port ${PORT}`);
});

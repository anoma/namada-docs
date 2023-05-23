FROM rust:1.66.0 as builder

ARG path

RUN curl https://i.jpillora.com/rust-lang/mdbook@v0.4.21! | bash
RUN curl https://i.jpillora.com/badboy/mdbook-mermaid@v0.11.2! | bash
RUN curl https://i.jpillora.com/Michael-F-Bryan/mdbook-linkcheck@v0.7.6! | bash
RUN curl https://i.jpillora.com/badboy/mdbook-open-on-gh@v2.2.0! | bash
RUN curl https://i.jpillora.com/tommilligan/mdbook-admonish@v1.7.0! | bash
RUN curl https://i.jpillora.com/lzanini/mdbook-katex@v0.4.2! | bash

ADD $path .
RUN mdbook-admonish install
RUN make build

FROM devforth/spa-to-http:latest
COPY --from=builder book/html/ . 

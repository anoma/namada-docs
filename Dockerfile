FROM rust:1.66.0 as builder

ARG path

RUN curl https://i.jpillora.com/rust-lang/mdbook@v0.4.18! | bash
RUN curl https://i.jpillora.com/badboy/mdbook-mermaid@v0.11.1! | bash
# RUN curl https://i.jpillora.com/Michael-F-Bryan/mdbook-linkcheck@v0.7.6! | bash
RUN curl https://i.jpillora.com/badboy/mdbook-open-on-gh@v2.2.0! | bash
RUN curl https://i.jpillora.com/tommilligan/mdbook-admonish@v1.7.0! | bash
# RUN curl https://i.jpillora.com/lzanini/mdbook-katex@v0.2.10! | bash

# RUN cargo install mdbook
# RUN cargo install mdbook-mermaid
RUN cargo install mdbook-linkcheck
# RUN cargo install mdbook-open-on-gh
# RUN cargo install mdbook-admonish
RUN cargo install mdbook-katex


ADD $path .
RUN mdbook-admonish install
RUN make build

# taken from https://github.com/rust-lang/mdBook/issues/984
RUN find $MD_BOOK_ROOT/src/ -type f -name "*.md" ! -iname "SUMMARY.md" -exec sed -ri 's/(\[.*\])\((.*\/)?(readme\.md)(#.*)?\)/\1\(\2index\.md\4\)/gI' {} \;

FROM devforth/spa-to-http:latest
COPY --from=builder book/html/ . 

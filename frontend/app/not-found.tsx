import { ButtonLink, Container, emClass, h1Class, leadClass } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="pt-40 pb-28">
      <Container className="max-w-[680px] text-center">
        <p className="mb-6 font-display text-7xl text-muted italic">404</p>
        <h1 className={h1Class}>
          This page <span className={emClass}>wandered off</span>
        </h1>
        <p className={`${leadClass} mt-6 mb-10`}>Let&apos;s take a deep breath and head back home.</p>
        <ButtonLink href="/">Back to home</ButtonLink>
      </Container>
    </section>
  );
}

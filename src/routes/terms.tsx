import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold">Terms of Use</h1>
      <p className="mt-6 text-muted-foreground">
        (Content to be provided)
      </p>
    </main>
  );
}

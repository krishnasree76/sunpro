import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="container-page py-20">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-6 text-muted-foreground">
        (Content to be provided)
      </p>
    </main>
  );
}

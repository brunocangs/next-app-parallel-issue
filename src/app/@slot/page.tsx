import { Suspense } from "react";
import { TestClient } from "~/components/Test.client";
import { TestServer, TestServerAsync } from "~/components/Test.server";

const SlotPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <aside>
      This is the slot page
      <TestClient />
      <TestServer />
      <Suspense fallback="Loading...">
        {/* @ts-ignore */}
        <TestServerAsync />
      </Suspense>
    </aside>
  );
};

export default SlotPage;

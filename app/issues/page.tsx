import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
// rafec,快捷语法
const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">IssuesPage</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;

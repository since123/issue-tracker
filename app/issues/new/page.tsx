"use client";
import React from "react";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useState, useCallback } from "react";

import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const NewIssuePage = () => {
  const [value, setValue] = useState("Initial value");

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE
        id="your-custom-id"
        value={value}
        onChange={onChange}
        options={{
          spellChecker: false,
          toolbar: [
            "bold",
            "italic",
            "heading",
            "|",
            "quote",
            "code",
            "table",
            "horizontal-rule",
            "unordered-list",
            "ordered-list",
            "|",
            "link",
            "image",
            "|",
            "side-by-side",
            "fullscreen",
            "|",
            "guide",
          ],
        }}
        placeholder="description"
      />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;

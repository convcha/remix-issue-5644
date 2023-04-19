import type { V2_MetaFunction } from "@remix-run/react";
import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";

const fooAtom = atom("foo");
const fooAtomFamily = atomFamily((id: string) => {
  return atom((get) => {
    return get(fooAtom);
  });
});

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const bar = useAtom(fooAtomFamily("bar"));
  console.log(bar);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

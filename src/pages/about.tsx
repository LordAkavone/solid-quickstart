import { createEffect, Suspense } from "solid-js";
import AboutData from "./about.data";

export default function About() {
  const name = AboutData();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="bg-indigo-100 text-slate-700 p-8 rounded-md">
      <h2 class="text-2xl">About</h2>

      <p class="mt-4">
        My name is Akavone, and I code Roblox games as well as HTML. Contact vcoffice.praetoraka@gmail.com for business enquiries.
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{name()}!</span>
        </Suspense>
      </p>
      <p>
        Visit{" "}
        <a href="https://akaone.netlify.app/about" target="_blank" class="underline">
      
        </a>
        {" "}for more information.
      </p>
    </section>
  );
}

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
        I am Akavone, a Praetor in BlueLitStudio's GAR. I am responsible for investigation on different individuals, including the Chancellor. Together with two other Praetors, we manage Blue's Roblox Star Wars game.
      </p>
    </section>
  );
}

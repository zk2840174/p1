import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import {Link} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (

      <div>
        <div className={'text-4xl'}>Home </div>
        <Link to={'/about'}>
          <div className={'text-2xl bg-blue-600'}>About</div>
        </Link>
      </div>
  )
}

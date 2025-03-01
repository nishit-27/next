import { NavBar } from "@/components/NavBar";

export default function LayoutAuth({children}:Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}
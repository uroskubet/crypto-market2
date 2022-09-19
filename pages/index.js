import CMCTable from "../components/cmcTable/CMCTable";
import { Header } from "../components/Header";
import Trending from "../components/Trending";
export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="mt-10" />

      <Trending />

      <div className="20" />
      <CMCTable />
    </div>
  );
}

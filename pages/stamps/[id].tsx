import { useRouter } from "next/router";
import { getStampById } from "./queries/get-stamp-by-id";

export default function Stamps() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = getStampById(id as string);

  if (loading) return "loading ...";
  if (error) return `Error! ${error}`;

  return (
    <section>
      <span>name: {data?.stamp.name}</span>
    </section>
  );
}

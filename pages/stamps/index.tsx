import { useRouter } from "next/router";
import { getAllStamps } from "./queries/get-all-stamps";

export default function Stamps() {
  const router = useRouter();
  const { page, limit } = router.query;

  const { loading, error, data } = getAllStamps({
    page: !!page ? +page : undefined,
    limit: !!limit ? +limit : undefined,
  });

  if (loading) return "loading ...";
  if (error) return `Error! ${error}`;
  if (!data?.stamps || (data.stamps && data.stamps.length <= 0)) {
    return "No data found";
  }

  return (
    <ul>
      {data.stamps.map((stamp, index) => {
        return (
          <li>
            {index}- {stamp.name}
          </li>
        );
      })}
    </ul>
  );
}

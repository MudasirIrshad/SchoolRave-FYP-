export default function UserDashbaord({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = params;
  return <div>{userId}</div>;
}

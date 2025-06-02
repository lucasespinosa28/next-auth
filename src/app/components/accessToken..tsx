import { useSession } from "next-auth/react"

export default function AccessToken() {
  const { data } = useSession()
  const accessToken = (data as { accessToken?: string } | null)?.accessToken
  return <div>Access Token: {accessToken ?? "Not available"}</div>
}
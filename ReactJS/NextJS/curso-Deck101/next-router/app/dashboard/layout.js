export default function DashboardLayout({ children }) {
  return (
    <>
      <h2>Sub layout do Dashboard</h2>
      {children} {/* se nao chamar o children nao pega os dados do page.js */}
    </>
  )
}

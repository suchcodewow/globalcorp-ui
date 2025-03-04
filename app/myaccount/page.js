import { FullPage } from '@@/core/Layouts'
import { myOrders, myQuotes, userTransactions } from '@@/core/Library'

export default async function MyAccount() {
  const orders = await myOrders()
  const payments = await userTransactions()
  const quotes = await myQuotes()
  return (
    <FullPage>
      {/* Columns */}
      <div className="grid grid-cols-1 gap-2 pt-5 xl:grid-cols-3">
        {/* My Quotes */}
        <div className="rounded-xl border-2">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="py-2 text-center text-base font-semibold leading-6">
                My Quotes
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Quote #
                      </th>

                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Car Model
                      </th>
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        House Size
                      </th>
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 rounded-xl">
                    {quotes.data.map((quote) => (
                      <tr key={quote.id}>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {quote.id.substr(quote.id.length - 8)}
                        </td>

                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {quote.carmodel}
                        </td>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {quote.homesize}sqft
                        </td>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {quote.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* My Orders */}
        <div className="rounded-xl border-2">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="py-2 text-center text-base font-semibold leading-6">
                My Orders
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Order #
                      </th>

                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {order.id}
                        </td>

                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          ${order.cartTotal}
                        </td>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {order.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Payments */}
        <div className="rounded-xl border-2">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="py-2 text-center text-base font-semibold leading-6">
                My Payments
              </h1>
            </div>
          </div>
          <div className="flow-root">
            <div className="overflow-hidden">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-500 text-white">
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Account
                      </th>

                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Payee
                      </th>
                      <th
                        scope="col"
                        className="p-2 text-left text-sm font-semibold"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {payments.map((payment) => (
                      <tr key={payment.id}>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {payment.accountName}
                        </td>

                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          {payment.vendor}
                        </td>
                        <td className="whitespace-nowrap p-2 text-sm text-gray-500">
                          ${Math.abs(payment.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullPage>
  )
}

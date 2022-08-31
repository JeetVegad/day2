import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";


export default function Invoices() {
    let invoices = getInvoices();
    let [seachParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <input
                value={seachParams.get("filter") || ""}
                onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }}
            />
            {invoices
                .filter((invoice) => {
                    let filter = seachParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLocaleLowerCase();
                    return name.startsWith(filter.toLocaleLowerCase());
                })

                .map((invoice) => (
                    <ul>
                        <li>
                            <NavLink className="text-decoration-none"
                                style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        color: isActive ? "red" : "",
                                    };
                                }}
                                to={`/invoices/${invoice.number}`}
                                key={invoice.number}
                            >
                                {invoice.name}
                            </NavLink>
                        </li>
                    </ul>
                ))}
            <Outlet />
        </div>
    )
}
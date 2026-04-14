import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage"
import { initials } from "../helpers/generators"
import { redirect } from "../helpers/alerts"
let auth = getLocalStorage("user")

const Sidebar = () => {
    function logout() {
        removeLocalStorage("user")
        redirect("Cerrando sesion...", "/", "info")
    }
    return (
        <aside>
            <div>
                <h2>Iniciales{initials(auth.fullName)}</h2>
                <p>Nombre:{auth.fullName}</p>
                <p>Rol:{auth.role}</p>
            </div>
            <nav>
                <a href="">Ofertas</a>
                <a href="">Candidatos</a>
                <button onClick={logout}>Cerrar Sesión</button>
            </nav>
        </aside>
    )
}
export default Sidebar
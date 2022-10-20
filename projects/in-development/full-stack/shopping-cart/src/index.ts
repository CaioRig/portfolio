import app from "./app";
import { CartRouter } from "./router/CartRouter";
import { DeliveriesRouter } from "./router/DeliveriesRouter";
import { ProductsRouter } from "./router/ProductsRouter";
import { UserRouter } from "./router/UserRouter";

app.use('/products', ProductsRouter)
app.use('/users', UserRouter)
app.use('/deliveries', DeliveriesRouter)
app.use('/cart', CartRouter)
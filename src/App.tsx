import { lazy } from "solid-js";
import { Navigate, Route } from "@solidjs/router";
import Layout from "./layout";
import { ROUTE_ACTIVITY, ROUTE_HOME, ROUTE_SETTING, ROUTE_STATISTIC } from "./utils/route";
import NotFoundPage from "./pages/notfound";

const DashboardPage = lazy(() => import("./pages/dashboard"));
const StatisticPage = lazy(() => import("./pages/statistic"));
const ActivityPage = lazy(() => import("./pages/activity"));
const SettingPage = lazy(() => import("./pages/setting"));

function App() {
    return (
        <Layout >
            <Route path="/" element={<Navigate href={ROUTE_HOME} />} />
            <Route path={ROUTE_HOME} component={DashboardPage} />
            <Route path={ROUTE_STATISTIC} component={StatisticPage} />
            <Route path={ROUTE_ACTIVITY} component={ActivityPage} />
            <Route path={ROUTE_SETTING} component={SettingPage} />
            <Route path="*" component={NotFoundPage} />
        </Layout>
    );
}

export default App;

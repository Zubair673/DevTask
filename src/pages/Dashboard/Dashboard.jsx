import { useState } from "react";

import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import StatsCards from "../../components/StatsCards/StatsCards";
import SearchBar from "../../components/Dashboard/SearchBar";
import FilterBar from "../../components/Dashboard/FilterBar";
import TaskList from "../../components/Dashboard/TaskList";

function Dashboard() {

  const [search, setSearch] = useState("");

  const [priorityFilter, setPriorityFilter] = useState("All");

  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <>
      <DashboardNavbar />

      <section className="min-h-screen bg-gray-100 py-8 px-5">

        <div className="max-w-7xl mx-auto">

          <WelcomeCard />

          <StatsCards />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <FilterBar
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          <TaskList
            search={search}
            priorityFilter={priorityFilter}
            statusFilter={statusFilter}
          />

        </div>

      </section>

    </>
  );
}

export default Dashboard;
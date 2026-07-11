import { ListChecks, FolderKanban, Users, Trophy } from "lucide-react";

function Statistics() {
  const stats = [
    {
      icon: <ListChecks size={40} className="text-blue-600" />,
      number: "1000+",
      title: "Tasks Managed",
    },
    {
      icon: <FolderKanban size={40} className="text-blue-600" />,
      number: "250+",
      title: "Projects Planned",
    },
    {
      icon: <Users size={40} className="text-blue-600" />,
      number: "500+",
      title: "Students",
    },
    {
      icon: <Trophy size={40} className="text-blue-600" />,
      number: "95%",
      title: "Productivity",
    },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            DevTask in Numbers
          </h2>

          <p className="mt-4 text-blue-100">
            Everything you need to stay productive and organized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;
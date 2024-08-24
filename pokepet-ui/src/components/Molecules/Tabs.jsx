import Button from "@/components/Atoms/Button";

const Tabs = ({ tabs = [], activeTab = "", setActiveTab = () => {} }) => {
  return (
    <div className="flex space-x-4 mb-4 w-full justify-center">
      {tabs.map((tab) => (
        <Button
          key={tab}
          className={`${
            activeTab === tab
              ? "bg-blue-500 text-white font-bold rounded-lg p-2 min-w-10"
              : "text-white font-bold rounded-lg p-2 min-w-10"
          }`}
          onClick={() => {
            setActiveTab(tab);
          }}
          label={tab}
        />
      ))}
    </div>
  );
};

export default Tabs;

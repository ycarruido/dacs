import CryptoCalculator from "../../components/ui/CryptoCalculator/CryptoCalculator";

export default function Home() {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mx-4 sm:w-full sm:max-w-none">
        <CryptoCalculator />
      </div>
    </div>
  );
}
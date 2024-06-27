import Listings from "./auctions/Listings"
export default function Home() {
  return (
    <div>
      <h3 className='text-3xl font-semibold mb-40'>
        <Listings />
      </h3>
    </div>
  );
}
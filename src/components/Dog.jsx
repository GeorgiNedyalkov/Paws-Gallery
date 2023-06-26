export default function Dog({ dog }) {
  return (
    <div className="w-64 h-64">
      <img
        src={dog}
        className="object-cover w-full h-full rounded shadow-md hover:scale-110 duration-150 cursor-pointer"
        alt="A dogs image"
      />
    </div>
  );
}

const Square = ({ desc }: { desc: string }) => {
  return (
    <div className="border rounded-md p-5 m-1 w-10px h-2.5 flex justify-center items-center">
      {desc}
    </div>
  );
};

export default Square;

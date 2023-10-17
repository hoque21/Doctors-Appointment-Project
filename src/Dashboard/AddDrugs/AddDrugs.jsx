import React from "react";
import { useForm } from "react-hook-form";

export default function AddDrugs() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleAddDurgs = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mt-6 px-6 text-2xl font-bold pb-6">Add Durgs</div>
      <div className="overflow-x-auto w-96 shadow-md bg-white p-9 rounded-lg ml-6">
        <form onSubmit={handleSubmit(handleAddDurgs)}>
          <div className="form-control w-full max-w-xs mx-auto mb-3">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>{" "}
            </label>
            <input
              placeholder="Durgs Name"
              type="name"
              {...register("name", { required: "Name Is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-rose-500" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mx-auto mb-3">
            <label className="label">
              {" "}
              <span className="label-text">Price</span>{" "}
            </label>
            <input
              placeholder="Durgs Price"
              type="price"
              {...register("price", { required: "Durgs Price Is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.price && (
              <p className="text-rose-500" role="alert">
                {errors.price?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mx-auto mb-3">
            <label className="label">
              {" "}
              <span className="label-text">Exprire Date</span>{" "}
            </label>
            <input
              placeholder="Date"
              type="date"
              {...register("date", { required: "Expire Date Is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.date && (
              <p className="text-rose-500" role="alert">
                {errors.date?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mx-auto mb-3">
            <label className="label">
              {" "}
              <span className="label-text">Stock</span>{" "}
            </label>
            <input
              placeholder="Available Stock"
              type="stock"
              {...register("stock", { required: "Stock Is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.stock && (
              <p className="text-rose-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs mx-auto mb-3">
            <label className="label">
              {" "}
              <span className="label-text">Photo</span>{" "}
            </label>
            <input
              placeholder="Enter Your Name"
              type="file"
              {...register("image", { required: "Photo Is Required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-rose-500" role="alert">
                {errors.image?.message}
              </p>
            )}
          </div>
          <input
            className="btn btn-primary w-full mx-auto mt-2 mb-2 text-white"
            value="Add Durgs"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

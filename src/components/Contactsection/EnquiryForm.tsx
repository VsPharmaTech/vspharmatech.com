import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getNames } from "country-list";

const EnquiryFormSchema = z.object({
  email: z.string().email("Please enter valid email"),
  fullName: z.string().min(2, "Please enter full name"),
  country: z
    .string()
    .min(1, "Country is required")
    .refine((value) => value !== "", {
      message: "Country selection is required",
    }),
  mobileNumber: z
    .string()
    .min(10, "Please enter a valid mobile number")
    .regex(/^[0-9]+$/, "Mobile number must contain only digits."),
  message: z.string().min(10, "Message should be at least 10 characters long"),
});

type EnquiryFormSchemaType = z.infer<typeof EnquiryFormSchema>;

const countries: Array<string> = getNames();

const sendEnquiryEmails = async (formData: EnquiryFormSchemaType) => {
  try {
    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
};

const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormSchemaType>({
    resolver: zodResolver(EnquiryFormSchema),
    defaultValues: {
      email: "",
      fullName: "",
      country: "",
      mobileNumber: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<EnquiryFormSchemaType> = async (
    data: EnquiryFormSchemaType
  ) => {
    console.log(data);
    await sendEnquiryEmails(data);
    console.log("send the email succesfully by calling sendEnquiryEmails!");
    reset();
  };

  return (
    <div className="px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 rounded-2xl shadow-xl border-2 border-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 sm:space-y-6 lg:space-y-8"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-gray-600 text-sm font-semibold mb-2 uppercase"
          >
            Email
          </label>
          <input
            // type="email"
            id="email"
            placeholder="Example@gmail.com"
            className="shadow appearance-none border rounded border-gray-400 w-full py-2 sm:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-600 absolute text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-600 text-sm font-semibold mb-2 uppercase"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your Full Name"
            className="shadow appearance-none border rounded border-gray-400 w-full py-2 sm:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-600 absolute text-xs">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="country"
            className="block text-gray-600 text-sm font-semibold mb-2 uppercase"
          >
            Country
          </label>
          <select
            {...register("country")}
            className="shadow appearance-none border rounded border-gray-400 w-full py-2 sm:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">--Select Country--</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-600 absolute text-xs">
              {errors.country.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-gray-600 text-sm font-semibold mb-2 uppercase"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            placeholder="Enter you Number"
            className="shadow appearance-none border rounded border-gray-400 w-full py-2 sm:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("mobileNumber")}
          />
          {errors.mobileNumber && (
            <p className="text-red-600 absolute text-xs">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-600 text-sm font-semibold mb-2 uppercase"
          >
            How can we help you?
          </label>
          <textarea
            id="message"
            placeholder="Describe your Project..."
            className="shadow appearance-none border rounded border-gray-400 w-full py-2 sm:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20 sm:h-24"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="text-red-600 absolute text-xs">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center font-roboto font-medium py-2 px-4 sm:px-6 rounded-md focus:outline-none focus:shadow-outline gap-2 hover:cursor-pointer"
          type="submit"
        >
          Send Your Inquiry
          <img src="/ArrowF.svg" alt="Arrow" className="h-full" />
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;

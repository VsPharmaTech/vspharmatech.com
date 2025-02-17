interface TitleTagProps {
    text: string;
  }
  
  export default function TitleTag({ text }: TitleTagProps) {
    return (
      <span className=" inline-block text-sky-600 bg-white border-2 border-sky-600 px-4 sm:px-6 py-2 sm:py-2 font-raleway text-sm sm:text-base font-bold uppercase tracking-wide rounded-full mb-6">
        {text}
      </span>
    );
  }
  
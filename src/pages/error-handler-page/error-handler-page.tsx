import { useSearchParams } from "react-router-dom";
import { ErrorTypes } from "widgets/error-handler/lib";
import { ErrorHandler } from "widgets/error-handler/ui";

export const ErrorHandlerPage = () => {
  const [searchParams] = useSearchParams();
  const errorType = searchParams.get("error-type") as ErrorTypes;

  return (
    <div>
      <ErrorHandler typeError={errorType || ErrorTypes.TechnicalWorks} />
    </div>
  );
};

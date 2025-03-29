export default function Error({ error }: { error: any }) {

  const errorMessages: Record<string, { status: string; message: string; detail: string }> = {
    "401": {
      status: "401",
      message: "Unauthorized",
      detail: "Authentication is required to access this resource.",
    },
    "403": {
      status: "403",
      message: "Forbidden",
      detail: "You do not have permission to access this resource.",
    },
    "404": {
      status: "404",
      message: "Oops! That page can’t be found",
      detail: "The page you are looking for might be deleted",
    },
    "408": {
      status: "408",
      message: "Request Timeout",
      detail: "The server timed out waiting for your request.",
    },
    "409": {
      status: "409",
      message: "Conflict",
      detail: "There was a conflict with the current state of the resource.",
    },
    "410": {
      status: "410",
      message: "Gone",
      detail: "The requested resource is no longer available and has been permanently removed.",
    },
    "429": {
      status: "429",
      message: "Too Many Requests",
      detail: "You have sent too many requests in a given amount of time.",
    },
    "500": {
      status: "500",
      message: "Oops! Something went wrong on our end. Please try again later",
      detail: "We're experiencing a temporary issue. Our team is working to resolve it."
    },
    "503": {
      status: "503",
      message: "Service Unavailable",
      detail: "The server is currently unable to handle the request due to temporary overloading or maintenance.",
    },
  };

  const statusKey = String(error.status);

  const errorInfo = errorMessages[statusKey] || {
    status: statusKey,
    message: "Oops! Something went wrong",
    detail: "An unexpected error occurred. Please try again later.",
  };

  return (
    <div className="py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none sm:text-[80px] md:text-[100px]">
                {errorInfo.status}
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight">
                {errorInfo.message}
              </h4>
              <p className="mb-8 text-lg">
                {errorInfo.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

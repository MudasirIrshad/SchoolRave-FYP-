interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-4">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium ${
              currentStep >= step
                ? "bg-gray-900 dark:bg-gray-50"
                : "bg-gray-300 dark:bg-gray-800"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
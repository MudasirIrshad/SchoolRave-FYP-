export default function NotificationsTab() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h2>
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <p className="font-medium">Application Status Update</p>
          <p className="text-gray-600">
            Your application to The Educator is now under review.
          </p>
          <p className="text-sm text-gray-500 mt-2">2 hours ago</p>
        </div>
      </div>
    </div>
  );
}

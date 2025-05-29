"use client";

import { Trash, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { deleteUserAccount } from "@/actions/delete-user";

export default function SettingsTab() {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete your account permanently?"))
      return;

    startTransition(async () => {
      try {
        await deleteUserAccount();
      } catch (err) {
        console.log(err);
        alert("Failed to delete account. Please try again.");
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
      <div className="border border-red-200 p-4 rounded-lg bg-red-50">
        <h3 className="font-semibold text-red-700 mb-2">Danger Zone</h3>
        <p className="text-sm text-red-600 mb-4">
          Deleting your account will remove all your data permanently. This
          action cannot be undone.
        </p>
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Deleting...
            </>
          ) : (
            <>
              <Trash className="w-4 h-4 mr-2" />
              Delete My Account
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

"use client";
export default function Error({ error }: { error: Error }) {
    return (
      <div className="text-red-600 text-center p-10">
        <h1>🚨 Error loading weather:</h1>
        <p>{error.message}</p>
      </div>
    );
}
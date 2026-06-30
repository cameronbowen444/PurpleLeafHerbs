"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiDownload,
  FiEdit3,
  FiMail,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiTrash2,
  FiUsers,
  FiXCircle,
} from "react-icons/fi";

type Subscriber = {
  email: string;
  subscriptionType: string;
  createdAt: string;
  blacklisted: boolean;
};

const subscriptionOptions = [
  { value: "both", label: "Both" },
  { value: "blog", label: "Blog Notes" },
  { value: "promotions", label: "Promotions" },
];

const formatType = (type: string) => {
  if (type === "blog") return "Blog Notes";
  if (type === "promotions") return "Promotions";
  return "Both";
};

const SubscribersPanel = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [newEmail, setNewEmail] = useState("");
  const [newPreference, setNewPreference] = useState("both");

  const loadSubscribers = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/admin/subscribers", {
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Could not load subscribers.");
        return;
      }

      setSubscribers(data.subscribers || []);
    } catch {
      setError("Something went wrong loading subscribers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  const filteredSubscribers = useMemo(() => {
    return subscribers.filter((subscriber) => {
      const matchesSearch = subscriber.email
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" || subscriber.subscriptionType === filter;

      return matchesSearch && matchesFilter;
    });
  }, [subscribers, search, filter]);

  const blogCount = subscribers.filter(
    (subscriber) => subscriber.subscriptionType === "blog"
  ).length;

  const promoCount = subscribers.filter(
    (subscriber) => subscriber.subscriptionType === "promotions"
  ).length;

  const bothCount = subscribers.filter(
    (subscriber) => subscriber.subscriptionType === "both"
  ).length;

  const activeCount = subscribers.filter(
    (subscriber) => !subscriber.blacklisted
  ).length;

  const handleAddSubscriber = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setActionLoading("add");

    try {
      const res = await fetch("/api/admin/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newEmail,
          subscriptionType: newPreference,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Could not add subscriber.");
        return;
      }

      setSuccess("Subscriber added successfully.");
      setNewEmail("");
      setNewPreference("both");
      await loadSubscribers();
    } catch {
      setError("Something went wrong adding the subscriber.");
    } finally {
      setActionLoading("");
    }
  };

  const handleUpdatePreference = async (
    email: string,
    subscriptionType: string
  ) => {
    setError("");
    setSuccess("");
    setActionLoading(email);

    try {
      const res = await fetch("/api/admin/subscribers", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subscriptionType,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Could not update subscriber.");
        return;
      }

      setSuccess("Subscriber preference updated.");
      await loadSubscribers();
    } catch {
      setError("Something went wrong updating the subscriber.");
    } finally {
      setActionLoading("");
    }
  };

  const handleBlockSubscriber = async (email: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to unsubscribe/block ${email}?`
    );

    if (!confirmed) return;

    setError("");
    setSuccess("");
    setActionLoading(email);

    try {
      const res = await fetch("/api/admin/subscribers/block", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Could not block subscriber.");
        return;
      }

      setSuccess("Subscriber has been unsubscribed/blocked.");
      await loadSubscribers();
    } catch {
      setError("Something went wrong blocking the subscriber.");
    } finally {
      setActionLoading("");
    }
  };

  const handleDeleteSubscriber = async (email: string) => {
    const confirmed = window.confirm(
      `Remove ${email} from this Brevo list?`
    );

    if (!confirmed) return;

    setError("");
    setSuccess("");
    setActionLoading(email);

    try {
      const res = await fetch(
        `/api/admin/subscribers?email=${encodeURIComponent(email)}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Could not remove subscriber.");
        return;
      }

      setSuccess("Subscriber removed from the list.");
      await loadSubscribers();
    } catch {
      setError("Something went wrong removing the subscriber.");
    } finally {
      setActionLoading("");
    }
  };

  const handleExportCsv = () => {
    const rows = [
      ["Email", "Preference", "Status", "Created At"],
      ...filteredSubscribers.map((subscriber) => [
        subscriber.email,
        formatType(subscriber.subscriptionType),
        subscriber.blacklisted ? "Blocked" : "Active",
        subscriber.createdAt || "",
      ]),
    ];

    const csv = rows
      .map((row) =>
        row.map((field) => `"${String(field).replaceAll('"', '""')}"`).join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "purple-leaf-herbs-subscribers.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-[#d8c6df]/70 bg-white p-6 shadow-[0_12px_35px_rgba(76,51,88,0.08)]">
        <div className="flex flex-col gap-4 border-b border-[#eaddec] pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8f6ca1]">
              Mailing List
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#3b243f]">
              Brevo Subscribers
            </h2>

            <p className="mt-2 text-sm text-[#6f5b75]">
              Manage the website subscriber list without opening Brevo.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleExportCsv}
              disabled={filteredSubscribers.length === 0}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c6df] bg-white px-5 py-3 text-sm font-semibold text-[#3b243f] transition hover:border-[#7d9b70] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiDownload />
              Export CSV
            </button>

            <button
              type="button"
              onClick={loadSubscribers}
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#7d9b70] bg-[#906198] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8f6ca1] disabled:opacity-60"
            >
              <FiRefreshCw className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-5">
          <div className="rounded-2xl bg-[#fffaf5] p-4">
            <FiUsers className="text-[#7d9b70]" />
            <p className="mt-2 text-2xl font-semibold text-[#3b243f]">
              {subscribers.length}
            </p>
            <p className="text-xs text-[#6f5b75]">Total</p>
          </div>

          <div className="rounded-2xl bg-[#fffaf5] p-4">
            <p className="text-2xl font-semibold text-[#3b243f]">
              {activeCount}
            </p>
            <p className="text-xs text-[#6f5b75]">Active</p>
          </div>

          <div className="rounded-2xl bg-[#fffaf5] p-4">
            <p className="text-2xl font-semibold text-[#3b243f]">
              {blogCount}
            </p>
            <p className="text-xs text-[#6f5b75]">Blog Notes</p>
          </div>

          <div className="rounded-2xl bg-[#fffaf5] p-4">
            <p className="text-2xl font-semibold text-[#3b243f]">
              {promoCount}
            </p>
            <p className="text-xs text-[#6f5b75]">Promotions</p>
          </div>

          <div className="rounded-2xl bg-[#fffaf5] p-4">
            <p className="text-2xl font-semibold text-[#3b243f]">
              {bothCount}
            </p>
            <p className="text-xs text-[#6f5b75]">Both</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleAddSubscriber}
        className="grid gap-3 rounded-[2rem] border border-[#d8c6df]/70 bg-white p-5 shadow-[0_12px_35px_rgba(76,51,88,0.06)] md:grid-cols-[1fr_220px_auto]"
      >
        <input
          type="email"
          placeholder="Add subscriber email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="min-h-12 rounded-full border border-[#eaddec] bg-[#fffaf5] px-4 text-sm text-[#3b243f] outline-none transition focus:border-[#7d9b70]"
          required
        />

        <select
          value={newPreference}
          onChange={(e) => setNewPreference(e.target.value)}
          className="min-h-12 rounded-full border border-[#eaddec] bg-[#fffaf5] px-4 text-sm text-[#3b243f] outline-none transition focus:border-[#7d9b70]"
        >
          {subscriptionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={actionLoading === "add"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#906198] px-5 text-sm font-semibold text-white transition hover:bg-[#8f6ca1] disabled:opacity-60"
        >
          <FiPlus />
          {actionLoading === "add" ? "Adding..." : "Add Subscriber"}
        </button>
      </form>

      <div className="rounded-[2rem] border border-[#d8c6df]/70 bg-white p-5 shadow-[0_12px_35px_rgba(76,51,88,0.06)]">
        <div className="grid gap-3 md:grid-cols-[1fr_220px]">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8f6ca1]" />

            <input
              type="text"
              placeholder="Search by email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="min-h-12 w-full rounded-full border border-[#eaddec] bg-[#fffaf5] pl-11 pr-4 text-sm text-[#3b243f] outline-none transition focus:border-[#7d9b70]"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="min-h-12 rounded-full border border-[#eaddec] bg-[#fffaf5] px-4 text-sm text-[#3b243f] outline-none transition focus:border-[#7d9b70]"
          >
            <option value="all">All preferences</option>
            {subscriptionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        {success && (
          <p className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            {success}
          </p>
        )}

        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#eaddec]">
          <div className="grid min-w-[780px] grid-cols-[1.5fr_1fr_1fr_1.4fr] bg-[#f8f0e8] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f6ca1]">
            <p>Email</p>
            <p>Preference</p>
            <p>Status</p>
            <p className="text-right">Actions</p>
          </div>

          {loading ? (
            <div className="p-5 text-sm text-[#6f5b75]">
              Loading subscribers...
            </div>
          ) : filteredSubscribers.length === 0 ? (
            <div className="p-5 text-sm text-[#6f5b75]">
              No subscribers found.
            </div>
          ) : (
            filteredSubscribers.map((subscriber) => (
              <div
                key={subscriber.email}
                className="grid min-w-[780px] grid-cols-[1.5fr_1fr_1fr_1.4fr] items-center border-t border-[#eaddec] px-4 py-4 text-sm"
              >
                <div className="flex items-center gap-2 text-[#3b243f]">
                  <FiMail className="text-[#7d9b70]" />
                  <span>{subscriber.email}</span>
                </div>

                <select
                  value={subscriber.subscriptionType}
                  onChange={(e) =>
                    handleUpdatePreference(subscriber.email, e.target.value)
                  }
                  disabled={actionLoading === subscriber.email}
                  className="w-fit rounded-full border border-[#eaddec] bg-[#fffaf5] px-3 py-2 text-xs font-semibold text-[#3b243f] outline-none transition focus:border-[#7d9b70] disabled:opacity-60"
                >
                  {subscriptionOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <p>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      subscriber.blacklisted
                        ? "bg-red-50 text-red-600"
                        : "bg-[#d8ead0] text-[#4f7a43]"
                    }`}
                  >
                    {subscriber.blacklisted ? "Blocked" : "Active"}
                  </span>
                </p>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => handleUpdatePreference(
                      subscriber.email,
                      subscriber.subscriptionType
                    )}
                    disabled={actionLoading === subscriber.email}
                    className="inline-flex items-center gap-1 rounded-full border border-[#eaddec] px-3 py-2 text-xs font-semibold text-[#3b243f] transition hover:border-[#7d9b70] disabled:opacity-60"
                  >
                    <FiEdit3 />
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() => handleBlockSubscriber(subscriber.email)}
                    disabled={
                      subscriber.blacklisted ||
                      actionLoading === subscriber.email
                    }
                    className="inline-flex items-center gap-1 rounded-full border border-[#eaddec] px-3 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 disabled:opacity-40"
                  >
                    <FiXCircle />
                    Block
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteSubscriber(subscriber.email)}
                    disabled={actionLoading === subscriber.email}
                    className="inline-flex items-center gap-1 rounded-full border border-[#eaddec] px-3 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 disabled:opacity-60"
                  >
                    <FiTrash2 />
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <p className="mt-4 text-xs leading-5 text-[#8b6a99]">
          “Remove” takes the contact off this website subscriber list. “Block”
          marks them as unsubscribed/blocked for email.
        </p>
      </div>
    </div>
  );
};

export default SubscribersPanel;
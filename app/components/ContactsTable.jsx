"use client";
import { useEffect, useState } from "react";

export default function ContactsTable() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await fetch("/api/contact");
    const data = await res.json();
    setContacts(data);
    // console.log(data)
  };

  useEffect(() => {
    fetchContacts();
  }, []);
// console.log(contacts)
 const updateStatus = async (id, status) => {
  
  await fetch(`/api/contact/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // ✅ REQUIRED
    },
    body: JSON.stringify({ status }),
  });

  fetchContacts();
};



  return (
    <div className="p-6 overflow-x-auto">
      <table className="w-full border">
        
        {/* ✅ TABLE HEADER */}
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>

        {/* ✅ TABLE BODY */}
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id} className="border-t">
              <td className="p-2">{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone || "-"}</td>
              <td>{c.service || "-"}</td>
              <td>{c.message}</td>
{/* {console.log(c._id)} */}
              <td>
                <select
                  value={c.status}
                  onChange={(e) =>
                    updateStatus(c._id, e.target.value)
                  }
                  className="border p-1"
                >
                  <option value="new">New</option>
                  <option value="approached">Approached</option>
                  <option value="success">Success</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
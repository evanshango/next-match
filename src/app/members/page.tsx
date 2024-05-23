import React from 'react';
import Link from "next/link";

function MembersPage() {
    return (
        <div>
            <h3 className="text-3xl">This will be the members Page</h3>
            <Link href="/">Go back Home</Link>
        </div>
    );
}

export default MembersPage;
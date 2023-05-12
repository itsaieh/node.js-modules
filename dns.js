/*
Name: DNS module
Description: It provides functionality to perform DNS (Domain Name System) 
lookups and DNS server operations. It allows you to resolve domain 
names to IP addresses and vice versa, perform reverse lookups, 
and query DNS servers for various types of records.

*/

const dns = require('dns');

// Resolving a domain name to an IP address
dns.resolve('www.example.com', (err, addresses) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('IP addresses:', addresses);
});

// Resolving an IP address to a domain name
dns.reverse('8.8.8.8', (err, hostnames) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Hostnames:', hostnames);
});

// Performing a DNS query for a specific record type
dns.resolveTxt('example.com', (err, records) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('TXT records:', records);
});


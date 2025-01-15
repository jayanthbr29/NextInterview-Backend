const base64ServiceAccount =
    "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAibmV4dC1pbnRlcnZpZXctMmY2NzEiLAogICJwcml2YXRlX2tleV9pZCI6ICI2OTk0NzJlMWY4ODUzOGU5N2Y2MTE3NzBkZjIxMGIwZjdhYzkzZDJkIiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUUM5dFRSSXkyejJxRk1WXG5TZ2k3dGNXbFdWQ0J6TlpZL2pGUzBnU1RIRmtLVXVDN1hCbi9jRjdvVWlWclYrSzRqTmtRaW5ReUptRFhsMU9SXG5kblFkaSt5Sm1aYmlDc3QyN0JGYUMvLytHT0ZEeVAvdlFJbEFmbSt1R3BieUNaa0UzU2hVa1ZIMC9mc1dSZXBuXG55NTkrb1ZZU0N2T3ZBbktocUcxSy82SUhhRG9NYXI4U0JrV3BRZ2x3OVBla3IzWFZuNXVYMDYxaUZKeGhqLzNOXG5BUUxCTENneUJiallleVZBcHlIbTNHY0tSWHRhMjRhUjBKUUR2amYyd3VZZ0RUMWo4TWxlWGR5d09yRFNkdXRmXG52WE9NenNwdEpFVFVBTUg5NXA2N0pheENxNmRxTmRNbjk0Rk1ISzZCaEFGTDFmUjlpaDhodVVIRENwMmlBaFVMXG5NdVM4TkZ6eEFnTUJBQUVDZ2dFQUNxWGxtZUpsS3RFVzNMNkxqL0dyZHRUMUNsd1RlZXBHblhYeFVNcUtDdVRNXG4vV2MxaEZ0cjBGRndEVDdoR0dlN2RVeTRLZXB5akJkUDF2M1ZsYVQ1Y1YzQUZNN3pUYWtCYmxMM0d1Mk5rMDd3XG5ZcDcyTlRzRGpMdXNWa2lJb0xmRElFQUo0Qnp6WDNRc0xJaEcyd1kyUFF3RlVvRHFLejIzYUxyQmZ2WHdNQ3NpXG4xMm82T2NObUY4cDRLMWUwcS9GaVF4TDZYU2tXN1ZCeTFsYmlpRG5qOFdWU0JRVXErZU02dWdoVHVtUFNiTEczXG54ZGdEWGprMkpldVg4UW1EcnlJak0vdy9qb1N2Yk8vdStDZTJqeTNrYmZDbTlsQVlxcnhmaW8vd2NmVzRMOGN2XG5PQmc5Zk9xRm5UbHZzKzI4NkdwaTBMWCtnUE13QnpPSk9yVTU0UWkza3dLQmdRRHhsbmpJMkdQOGZEM3lhUTJXXG5jTW9vakx6bGlqbGRyTHZyUW04Znk5Sk1lZENZb3U3cWpRTnd4MDRtMndRYXpqL3hBbjlnc000YUpMUUQ1RHM5XG5QV3BzckhDTVdGNzNsSlUydlBkekhhamtBSmx1SlRKRkt3cm1NS0UwMlFtVDU4VlZsZnpiRXdaVm51ZUtmUEN1XG53eHJJcnRDV3hWbG0rcDgyVVUrZXpkZit1d0tCZ1FESkJtd0ExZWQ5bEhad3U3cGVXMlptQ0VEMWF0ZGdYSTYvXG5KZXdOMGdDN1g1aTRXaEpFVFVEQnMvNjdDWFpyblE2Rk0zZnpDYTluUkhRRFNCSms0SDNIVnJGMTN0RjJZM2pWXG5wdDNrWlR2OURiY2tTRGk1UGhsbGMybnFmaDN4VGZDbHROQkMxUjJNVERkSHMrVzhjYmxWbTJRSzNDdHIzYW9zXG5hUTdWSzkvMlF3S0JnQXFiN3dYeTZzRWx1NXF2bmxjaThOM0RBSENjRjFUVHh4VFh3QVdIYjk3SDRxOHhTSWlvXG5WS1JaUEVkY2l0dWFmeGhZWWJ1ZlNBM0IydDNvNGVrWWoxbmlZTGJwRXBLUXhkUzNpNjVVZVJ3NklvTEJ3MmxpXG5NSUpYVkZ6N3d2M3B5Ykt1ZVlJdFhiUFkzSllxVW05NlJleldNSGJPaDlTTDRQNERxQmx6Tks4TkFvR0FRQU00XG5meWVlT0dIL09UUytTdStsOHRXc0FicE03UlZzS3pnaks5OTBkalloeG9xQUNKbmxCZ21RRXZVWGJYc3N0WVBIXG5MWEFuRjZZM254ZmpLNVpFMXlZbkNsYXlzcFZJVkJoM3poUGlmMWxQdVZENkp4cThNWThINmpEUXpoYzRpenZCXG5tWmFOZXpDRjVlSkdSTFNlQk1HZm9NbXRWZ0xXL3A5UnB0WDYwa3NDZ1lFQW1KdmYyREt0OHdPQ1hjd3dXdEgvXG5zU3loM3ZvQTBNZlFPQUR0ZWtJbnN3cEE4TTR0WDRjQTQ1QUU1MEVCYzJIUlU2cGJkN0d0TmM4UlhtYU5JQlNvXG5KQXc3blE4UjNUdkl0S2RBUUJQUWJ5ek96UEw2U0hkNlo4di9sNExWN2VtOGNoKzJrNWtTRFVzekhvQmkvYlhQXG41NTVvdkFvVElGVDdRTVc5UGc5c29Gbz1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJmaXJlYmFzZS1hZG1pbnNkay03b3l3dkBuZXh0LWludGVydmlldy0yZjY3MS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxMDc0MDIxNjE2MTM2NzY5NDQwMDEiLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLTdveXd2JTQwbmV4dC1pbnRlcnZpZXctMmY2NzEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0="

module.exports = {
    base64ServiceAccount,
};

# Becoming a steward

A public goods steward can consist of an arbitrary number of people, and can be a single person. The only requirement is that the steward's multisignature account is elected by the community, through a governance proposal.

For this reason, the first step to becoming a steward is to create a multisignature account. This can be done using the commands found in (TODO: link to multisig docs). Once the multisig account is created, the steward can submit a governance proposal to elect the account as a steward.

## Governance proposal

The governance proposal required to elect a new steward is `StewardProposal`.

### Creating the `proposal.json` file

The `proposal.json` file contains the information about the proposal. It is a JSON file with the following structure:

```json
{
    "content": {
        "title": "Stewie for Steward 2024",
        "authors": "stewie@heliax.dev",
        "discussions-to": "forum.namada.net/t/stewies-manifesto/1",
        "created": "2024-01-01T00:00:01Z",
        "license": "MIT",
        "abstract": "Stewie is running for steward. Vote for Stewie!",
        "motivation": "I, Stewie Griffin, declare my candidacy for Steward of the Namada. Though I may be young in age, my wisdom, intelligence, and unwavering determination make me the ideal candidate to lead this great community into the future. As your Steward, I pledge to bring about a new era of progress, innovation, and, most importantly, world domination.",
        "details": "As a genius baby, I possess an unmatched level of intelligence and a visionary mindset. I will utilize these qualities to solve the most complex problems, and direct public goods funding towards weapons of mass destruction ... i mean open source software for weapons of mass destruction",
    },
    "author": "stewie",
    "voting_start_epoch": 3,
    "voting_end_epoch": 6,
    "grace_epoch": 12,
    "type": "StewardProposal"
}
```

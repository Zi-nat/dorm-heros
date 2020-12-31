/**
 * @desc Check if issue has all required fields
 *
 * @param {Object} issue - Object should have required fields
 *
 * @returns {Boolean} - True if all required fields are filled otherwise false
 */
const issueValidator = issue => {
  if (!issue) return false;
  if (
    issue.disturbanceType.isNumberOfInvolvedPeopleMandatory &&
    !issue.numberOfInvolvedPeople
  )
    return false;

  if (
    issue.title &&
    issue.title.length >= 5 &&
    issue.title.length <= 35 &&
    issue.location &&
    issue.location.length &&
    issue.description &&
    issue.description.length &&
    issue.disturbanceType
  )
    return true;
  return false;
};

export { issueValidator };

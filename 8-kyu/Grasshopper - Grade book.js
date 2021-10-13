function getGrade(s1, s2, s3) {
    const mid = (s1 + s2 + s3) / 3;
    if (mid < 60) { return 'F' }
    else if (mid < 70) { return 'D' }
    else if (mid < 80) { return 'C' }
    else if (mid < 90) { return 'B' }
    else if (mid <= 100) { return 'A' }
}
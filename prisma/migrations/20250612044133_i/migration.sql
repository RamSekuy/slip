-- CreateEnum
CREATE TYPE "Education" AS ENUM ('SD', 'SMP', 'SMA', 'SMK', 'MA', 'MTS', 'D3', 'S1', 'S2', 'S3');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('KepsekSDTQ', 'Kepsek', 'GuruSDTQ', 'GuruSMPTQ', 'GuruSMA', 'GuruTerbang', 'Chef', 'Cleaner', 'Morobbi', 'Laundry', 'Admin', 'FO', 'Sekretaris', 'Keuangan', 'KetuaYayasan', 'Maintenance', 'Musyrif', 'Mudir', 'KetuaTahfidz', 'Keamanan', 'Pengabdians', 'Operator', 'Media');

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "niy" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "lastEducation" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "defaultSalaryId" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalarySlip" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gajiPokok" INTEGER NOT NULL DEFAULT 0,
    "masaKerja" INTEGER NOT NULL DEFAULT 0,
    "tunjanganJabatan" INTEGER NOT NULL DEFAULT 0,
    "tunjanganfungsional" INTEGER NOT NULL DEFAULT 0,
    "waliKelas" INTEGER NOT NULL DEFAULT 0,
    "kurikulum" INTEGER NOT NULL DEFAULT 0,
    "kesiswaan" INTEGER NOT NULL DEFAULT 0,
    "bendahara" INTEGER NOT NULL DEFAULT 0,
    "operasionalSD" INTEGER NOT NULL DEFAULT 0,
    "operasionalSMP" INTEGER NOT NULL DEFAULT 0,
    "operasionalSMA" INTEGER NOT NULL DEFAULT 0,
    "media" INTEGER NOT NULL DEFAULT 0,
    "tunjanganKesehatan" INTEGER NOT NULL DEFAULT 0,
    "kehadiran" INTEGER NOT NULL DEFAULT 0,
    "kbmTahfidz" INTEGER NOT NULL DEFAULT 0,
    "kbmFormal" INTEGER NOT NULL DEFAULT 0,
    "inval" INTEGER NOT NULL DEFAULT 0,
    "gTerbang" INTEGER NOT NULL DEFAULT 0,
    "tunjanganMakan" INTEGER NOT NULL DEFAULT 0,
    "tunjanganTinggal" INTEGER NOT NULL DEFAULT 0,
    "seragam" INTEGER NOT NULL DEFAULT 15000,
    "sedekah" INTEGER NOT NULL DEFAULT 0,
    "kasbon" INTEGER NOT NULL DEFAULT 0,
    "denda" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SalarySlip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalarySlipReport" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "salarySlipId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SalarySlipReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_phoneNumber_key" ON "Employee"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_niy_key" ON "Employee"("niy");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_defaultSalaryId_key" ON "Employee"("defaultSalaryId");

-- CreateIndex
CREATE UNIQUE INDEX "SalarySlipReport_salarySlipId_key" ON "SalarySlipReport"("salarySlipId");

-- CreateIndex
CREATE UNIQUE INDEX "SalarySlipReport_employeeId_date_key" ON "SalarySlipReport"("employeeId", "date");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_defaultSalaryId_fkey" FOREIGN KEY ("defaultSalaryId") REFERENCES "SalarySlip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalarySlipReport" ADD CONSTRAINT "SalarySlipReport_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalarySlipReport" ADD CONSTRAINT "SalarySlipReport_salarySlipId_fkey" FOREIGN KEY ("salarySlipId") REFERENCES "SalarySlip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

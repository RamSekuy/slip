import { SalarySlip } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { SalarySlipExtend, SalarySlipReportExtend } from "@/type/prismaExtend";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const intFields: { key: keyof SalarySlipExtend; label: string }[] = [
  { key: "tunjanganJabatan", label: "Tunjangan Jabatan" },
  { key: "tunjanganfungsional", label: "Tunjangan Fungsional" },
  { key: "waliKelas", label: "Wali Kelas" },
  { key: "kurikulum", label: "Kurikulum" },
  { key: "kesiswaan", label: "Kesiswaan" },
  { key: "bendahara", label: "Bendahara" },
  { key: "operasionalSD", label: "Operasional SD" },
  { key: "operasionalSMP", label: "Operasional SMP" },
  { key: "operasionalSMA", label: "Operasional SMA" },
  { key: "media", label: "Media" },
  { key: "tunjanganKesehatan", label: "Tunjangan Kesehatan" },
  { key: "kehadiran", label: "Kehadiran" },
  { key: "kbmTahfidz", label: "KBM Tahfidz" },
  { key: "kbmFormal", label: "KBM Formal" },
  { key: "inval", label: "Inval" },
  { key: "gTerbang", label: "G. Terbang" },
  { key: "tunjanganMakan", label: "Tunjangan Makan" },
  { key: "tunjanganTinggal", label: "Tunjangan Tinggal" },
  { key: "seragam", label: "Seragam" },
  { key: "sedekah", label: "Sedekah" },
  { key: "kasbon", label: "Kasbon" },
  { key: "denda", label: "Denda" },
];

function toIDR(num: number) {
  return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 10 },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  label: { fontWeight: "bold" },
  table: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    minHeight: 24,
  },
  cellLabel: {
    flex: 1,
    padding: 6,
    borderRightWidth: 1,
    borderColor: "#ccc",
    fontWeight: "bold",
    backgroundColor: "#fafafa",
  },
  cellValue: {
    flex: 1,
    padding: 6,
    textAlign: "right",
  },
  totalRow: {
    flexDirection: "row",
    backgroundColor: "#e0e7ff",
    borderTopWidth: 1,
    borderColor: "#000",
    fontWeight: "bold",
  },
  totalLabel: {
    flex: 1,
    padding: 6,
    borderRightWidth: 1,
    borderColor: "#ccc",
    fontWeight: "bold",
  },
  totalValue: {
    flex: 1,
    padding: 6,
    textAlign: "right",
    fontWeight: "bold",
  },
});

type Filter = { slip: SalarySlipReportExtend & { salarySlip: SalarySlip } };

const PDFComponent = async ({
  filter: { slip },
  kop,
}: {
  filter: Filter;
  kop: string;
}) => {
  const { salarySlip, employee, date } = slip;

  const monthYear = new Date(date).toLocaleString("id-ID", {
    month: "long",
    year: "numeric",
  });

  const tunjanganMakanIdx = intFields.findIndex(
    (f) => f.key === "tunjanganMakan"
  );

  const rows = intFields
    .map((field, idx) => {
      const value = salarySlip[field.key as keyof SalarySlip];
      if (
        idx < tunjanganMakanIdx &&
        (typeof value !== "number" || value === 0)
      ) {
        return null;
      }
      return {
        label: field.label,
        value: typeof value === "number" ? value : 0,
      };
    })
    .filter(Boolean);

  const pokok = salarySlip.gajiPokok + salarySlip.masaKerja;
  const total = rows.reduce((acc, row) => acc + (row ? row.value : 0), 0);

  return (
    <Document title={`Slip Gaji ${monthYear}`}>
      <Page style={styles.page}>
        <View style={{ margin: -32, marginBottom: 20 }}>
          <Image
            src={kop}
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </View>
        <Text style={styles.title}>{`Slip Gaji`}</Text>
        <Text style={{ marginBottom: 8 }}>
          Nama Pegawai: <Text style={styles.label}>{employee.name}</Text>
        </Text>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.headerRow}>
            <Text style={{ ...styles.cellLabel, backgroundColor: "#f0f0f0" }}>
              Komponen
            </Text>
            <Text
              style={{
                ...styles.cellLabel,
                textAlign: "right",
                backgroundColor: "#f0f0f0",
              }}
            >
              Nominal
            </Text>
          </View>
          {/* Table Body */}
          <View style={styles.row}>
            <Text style={styles.cellLabel}>{"Gaji Pokok"}</Text>
            <Text style={styles.cellValue}>{toIDR(pokok)}</Text>
          </View>
          {rows.map(
            (row, idx) =>
              row && (
                <View style={styles.row} key={idx}>
                  <Text style={styles.cellLabel}>{row.label}</Text>
                  <Text style={styles.cellValue}>{toIDR(row.value)}</Text>
                </View>
              )
          )}
          {/* Total */}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{toIDR(total)}</Text>
          </View>
        </View>
        <Text style={{ marginBottom: 8, textAlign: "right", marginTop: 8 }}>
          Tangerang, <Text style={styles.label}>{monthYear}</Text>
        </Text>
        <Text>ttd</Text>
        <Text>bendahara yayasan</Text>
      </Page>
    </Document>
  );
};

export default PDFComponent;
